import clsx from 'clsx';
import styles from 'styles/container.module.css';

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx(className, styles.container)}>{children}</div>;
}
