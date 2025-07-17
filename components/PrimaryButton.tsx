import Link from "next/link";
type PrimaryButtonProps = {
  link_label: string;
  link_url: string;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Link
      href={props.link_url}
      prefetch={false}
      className="py-3 px-6 text-white bg-gradient-to-br from-full-100 to-full-200 rounded-xl font-bold block text-center"
    >
      {props.link_label}
    </Link>
  );
}
