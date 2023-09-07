import { useForm } from "react-hook-form";
import './signup.css';
 
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const confirmPassword = watch("password");
  console.log("passs", confirmPassword);
  const onSubmit = (data) => console.log(data);

  return (
    <section className="continuer">
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 m-5 form">
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            {...register("UserName", { required: true })}
          />
          {errors.UserName?.type === "required" ? (
            <p className="text-danger"> Name is required </p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            {...register("Email", { required: true })}
          />
          {errors.Email?.type === "required" ? (
            <p className="text-danger"> email is required </p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">
            Phone
          </label>
          <input
            type=""
            className="form-control"
            {...register("Phone", {
              required: true,
              maxLength: 12,
              minLength: 11,
            })}
          />
          {errors.Phone?.type === "required" ? (
            <p className="text-danger"> Phone is required </p>
          ) : "" || errors.Phone?.type === "maxLength" ? (
            <p className="text-danger"> maxLength 12</p>
          ) : "" || errors.Phone?.type === "minLength" ? (
            <p className="text-danger"> minLength 11</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <select {...register("gender")}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            id="Password"
          />
          {errors.password?.type === "required" ? (
            <p className="text-danger">
              {" "}
              password is required and must have Capital and small letters
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="mb-3">
          <label htmlfor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control "
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === confirmPassword,
            })}
          />
          {errors?.confirmPassword?.type === "validate" ? (
            <p className="text-danger">The passwords do not match</p>
          ) : "" || errors?.confirmPassword?.type === "required" ? (
            <p className="text-danger">Confirm Password is Required</p>
          ) : (
            ""
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Signup;
