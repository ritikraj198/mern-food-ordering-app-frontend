import landingImage from "../assets/landing.png";
// import landingImage from "../assets/landing2.png";
// import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { type SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  //this is callback functuion,for the searchBar(form) submission
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Your meal, on the move.
        </h1>
        <span className="text-xl">Fast, fresh, wherever you are</span>
        <SearchBar
          placeHolder="Search by city or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* When the screen size is medium (≥768px) or larger, use 2 columns in the grid. OTHERWISE DEFAULT TO grid which by def has col-1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={landingImage}
          width={300}
          height={300}
          className="mx-auto md:ml-auto md:mr-0"
        />

        <div className="flex flex-col items-center justify-center gap-4 text-center max-w-md mx-auto">
          <span className="font-bold text-3xl tracking-tighter">
            From app to appetite in no time!
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
