import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"


const HeroSection = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex justify-center items-center" >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="text-center p-4 relative z-10 w-full">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
                <p className="mt-4 text-base font-normal md:text-lg to-neutral-300 max-w-lg mx-auto"
                >Dive into our comprehensive music courses and transform your musical journey today.Whether you are a beginner or looking to refine your skills ,join us to unlock your true potential.</p>
                <div className="mt-4">
                    <Button>
                        <Link href={'/courses'}>
                            Explore courses
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection