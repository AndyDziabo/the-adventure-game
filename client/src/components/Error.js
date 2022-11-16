
function Error({ errors }) {

    return(
        <div className="login-error">
            {errors[0]}
        </div>
    )
}

export default Error;