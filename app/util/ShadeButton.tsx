import clsx from "clsx";

type ShadeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement> & { shade? : boolean}, "className">;

export default function ShadeButton( {shade, ...props }: ShadeButtonProps)
{
    return (
        <button {...props} className={clsx("text-xl w-60 text-left p-3 border border-white cursor-pointer transition-all duration-250",
            shade && "bg-white text-background",
            !shade && "text-white "

        )}>
        </button>
    )
}