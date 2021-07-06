import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Loader.scss'

const LoaderComponent = () => {
    return (
      <Loader
        type="Bars"
        color="white"
        height={30}
        width={30}
      />
    );
}

export default LoaderComponent;