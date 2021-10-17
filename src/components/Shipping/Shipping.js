import React from 'react'
import { useForm } from "react-hook-form";



const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(("example")); // watch input value by passing the name of i
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("name")} />

                <input {...register("email", { required: true })} />

                {errors.email && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default Shipping
