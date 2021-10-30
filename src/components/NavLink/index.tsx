import { useRouter } from 'next/router'
import Link from 'next/link'


interface IProps {
    to: String;
}

export function NavLink({ to }: IProps) {
    const router = useRouter()
    console.log('router: ', router);
    const isActive = this.context.router.route.location.pathname === this.props.to;
    const className = isActive ? 'active' : '';

    return (
        <span className={`${className}`}>
            <Link href={`${to}`}>
                {this.props.children}
            </Link>
        </span>
    );
}