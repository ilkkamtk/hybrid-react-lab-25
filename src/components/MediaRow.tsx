import {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {Link} from 'react-router';

type MediaItemProps = {
  item: MediaItemWithOwner;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
};

const MediaRow = (props: MediaItemProps) => {
  const {item} = props;
  return (
    <article className="w-full p-2">
      <img
        src={
          item.thumbnail ||
          (item.screenshots && item.screenshots[2]) ||
          undefined
        }
        alt={item.title}
      />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>{item.filesize}</p>
      <p>{item.media_type}</p>
      <p>{item.username}</p>
      <p>
        <Link to="/single" state={{item}}>
          Show
        </Link>
      </p>
    </article>
  );
};

export default MediaRow;
