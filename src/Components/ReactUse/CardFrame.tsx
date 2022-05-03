type CardFrameProps = {
  feature: string;
  children: () => JSX.Element;
}

const CardFrame = ({ feature, children }: CardFrameProps): JSX.Element => {
  return (
    <div className="card w-96 bg-base-300 shadow-lg mr-2 mb-2">
      <div className="card-body">
        <h2 className="card-title">{feature}</h2>
        {children()}
        <div className="card-actions justify-end">
          <a
            role="button"
            className="btn btn-primary btn-block"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/streamich/react-use/blob/master/docs/${feature}.md`}
          >
            GitHubへ
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardFrame;
