export default function SectionHeading({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
