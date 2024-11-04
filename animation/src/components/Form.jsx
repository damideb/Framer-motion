import { useForm } from "react-hook-form";

export default function Form() {
  const form = useForm({
    defaultValues: {
        username:'Dami',
        email:'',
        channel:'',
        social:{
            facebook:''
        },
        phoneNumbers:['', ''],
        age:0
    }
  });

  const { register, handleSubmit, formState, watch, getValues, setValue } = form;

  const { errors } = formState;
  const submitForm = (data) => {
    console.log("form submited", data);
  };

 const age = watch('age')    
 console.log(age) 

 const handleClick = ()=>{
    console.log(getValues())
 }

 const handlSetValue = ()=>{
    setValue("age", 25,{
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
  
    })
 }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(submitForm)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required",
          })}
        />

        <p>{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            validate: {
              nonAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email"
                );
              },
              blackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("bad.com") ||
                  "This domain is already blacklisted"
                );
              },
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="age">age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            // there is also valeasDate option to handle date field
            valueAsNumber: true,
            required: "age is required",
          })}
        />
        <p>{errors.channel?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: "Channel is required",
          })}
        />
        <p>{errors.channel?.message}</p>

        <label htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook" {...register("social.facebook",{
            disabled: watch('channel')===""
        })} />

        <label htmlFor="primary Number"> Primary phoneNumber</label>
        <input
          type="text"
          id="primary Number"
          {...register("phoneNumbers.0")}
        />

        <label htmlFor="secondary Number"> secondary phoneNumber</label>
        <input
          type="text"
          id="secondary Number"
          {...register("phoneNumbers.1")}
        />
        <button type="submit">submit</button>
      </form>
      <button type="button" onClick={handleClick}>
        Get Value
      </button>
      <button type="button" onClick={handlSetValue}>
        Set Value
      </button>
    </div>
  );
}
