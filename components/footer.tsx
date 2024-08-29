import { dictionaryType } from "@/get-dictionary";

export default function Footer({
    dictionary,
}: {
    dictionary: dictionaryType["footer"];
}) {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 text-xs block">
                &copy; {dictionary.text1}
            </small>
            <p className="text-xs">
                <span className="font-semibold">{dictionary.text2}</span>{" "}
                {dictionary.text3}
            </p>
        </footer>
    );
}
