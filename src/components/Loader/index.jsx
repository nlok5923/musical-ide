import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Loader.scss'

const LoaderComponent = () => {
    return (
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
      />
    );
}

export default LoaderComponent;