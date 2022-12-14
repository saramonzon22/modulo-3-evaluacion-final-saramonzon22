import errorImage from '../images/defaultImg.jpg';
import '../styles/layout/CardDetail.scss';
import PropTypes from 'prop-types';

function Detail(props) {
    console.log(props)
    const notImage = (image) => {
        return image === '' ? errorImage : props.characterFound.picture;
    };
    const pjAlive = (alive) => {
        if (alive === true) {
            return (<p className="card__description">Alive <i className="fa-solid fa-heart"></i></p>)
        }
        else {
            return <p className="card__description">Dead <i className="fa-solid fa-skull-crossbones"></i></p>
        }
    }
    const handleBack = () => {
        window.history.back();
    }

    return (
        <main className='page-detail'>
            <button onClick={handleBack} className='link-text'><span className='back'>Back</span></button>
            <div className={(props.characterFound.house)}>
                <img
                    className="card__img img-one-card"
                    src={notImage(props.characterFound.picture)}
                    alt={`Foto de ${props.characterFound.name}`}
                    title={`Foto de ${props.characterFound.name}`}></img>
                <div className='detail-info'>
                    <h4 className="title">{props.characterFound.name}</h4>

                    <p className="card__description">Gender: {`${props.characterFound.gender}`} </p>
                    <p className="card__description">Birth: {props.characterFound.dateOfBirth}</p>
                    <p className="card__description alive">Status: {pjAlive(props.characterFound.alive)}</p>
                    <p className="card__description">Species: {`${props.characterFound.species}`} </p>
                    <p className="card__description">{props.characterFound.alternateName === '' ? 'Other name: none' : `Other name: ${props.characterFound.alternateName}`}</p>
                    <p className="card__description">House: {`${props.characterFound.house}`} </p>

                </div>

            </div>
        </main>
    )

};
Detail.defaultProps = {
    image: errorImage,
    name: '',
    gender: '',
    dateOfBirth: '',
    status: '',
    species: '',
    alternateName: '',
    house: '',

};

Detail.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    dateOfBirth: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    alternateName: PropTypes.string,
    house: PropTypes.string,

};

export default Detail;
