import { useParams } from 'react-router-dom';
import { RoomDetail } from '../../types/types';

type MainPageProps = {

  allRooms: RoomDetail[];
}

function RoomPropertyReviews({ allRooms }: MainPageProps): JSX.Element {

  const { id } = useParams<string>();

  const currentRoom = allRooms.find((room) => room.id === Number(id)) as RoomDetail;

  const { reviews } = currentRoom;

  return (

    <ul className="reviews__list">


      {reviews.map((item) => (
        <li key={`${item.id}`} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={item.avatar} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {item.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: `${item.rating * 100 / 5}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {item.text}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{item.date[0]}  {item.date[1]}</time>
          </div>
        </li>

      )
      )}


    </ul>

  );
}

export default RoomPropertyReviews;
