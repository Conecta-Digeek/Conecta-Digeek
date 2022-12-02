interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

export default Layout;
