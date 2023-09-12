import './Link.scss';

type Props = {
  children: string,
};

export const Link: React.FC<Props> = ({ children }) => {
  return (
    <>
      <a className="link" href="/#">{children}</a>
    </>
  );
}
