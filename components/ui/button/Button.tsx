import Link from "next/link";

interface ButtonProps {
  href?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  type: "link" | "submit";
  variation: "transparent" | "filled";
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  href = "",
  type,
  bgColor,
  borderColor,
  textColor,
  variation,
  children,
  className,
}: ButtonProps) => {
  return (
    <>
      {type === "link" ? (
        <Link
          href={href}
          className={`${className} md:text-lg text-sm font-semibold rounded-md ${
            variation === "transparent"
              ? `border ${borderColor ?? "border-brandColor"} ${
                  textColor ?? "text-brandColor"
                } px-8 py-4`
              : variation === "filled"
              ? `${bgColor ?? "bg-brandColor"} py-[18px] px-[32px]`
              : ""
          }`}
        >
          {children}
        </Link>
      ) : type === "submit" ? (
        <button type="submit">{children}</button>
      ) : (
        ""
      )}
    </>
  );
};

export default Button;
