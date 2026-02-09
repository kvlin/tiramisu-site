"use client";

export default function ScrollButton({
    targetId,
    children,
    className,
}: {
    targetId: string;
    children: React.ReactNode;
    className?: string;
}) {
    const handleClick = () => {
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${targetId}`);
    };

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
}
