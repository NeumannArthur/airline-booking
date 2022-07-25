import Link from "next/link";

const PageNotFound = () => {
    return (
        <div>
            <h1>Oops! The page you're looking for doesn't exist!</h1>
            <Link href='/'>Click here</Link> to return home!
        </div>
    )
}

export default PageNotFound;