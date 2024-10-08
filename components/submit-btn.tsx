import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn({ text }: { text: string }) {
    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all 
                hover:scale-110 
                hover:bg-gray-950
                focus:scale-110 
                focus:bg-gray-950
                active:scale-105
                disabled:scale-100
                disabled:bg-opacity-65
                dark:bg-white dark:bg-opacity-10
            "
            type="submit"
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white" />
            ) : (
                <>
                    {text}{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
            )}
        </button>
    );
}
