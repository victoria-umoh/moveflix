class AppURL{
    // Declare a static property BaseURL and assign the base URL for the API (laravel URL whr api is fetched from)
  static BaseURL = "http://127.0.0.1:8000/api";     // Replace with your Laravel backend URL

    // Declare a static property VisitorDetails and concatenate it with the base URL to form the complete URL
  static VisitorDetails = this.BaseURL+"/getvisitor"; 
  
  static PostContact = this.BaseURL+"/postcontact";

  static GetStarted = AppURL.BaseURL+"/getstarted";

  static GetMovies= AppURL.BaseURL+"/getmovies";

  static GetSeries= AppURL.BaseURL+"/tvseries";
  
  static SearchMovies= AppURL.BaseURL+"/searchmovies";

  static Register = AppURL.BaseURL+"/signup";

  static Login = AppURL.BaseURL+"/login";

  static ForgotPassword = AppURL.BaseURL+"/forgot-password";

  static ResetPassword = AppURL.BaseURL+"/reset-password";

  static NetflixOriginals = AppURL.BaseURL+"/netflix-originals";

  static Trending = AppURL.BaseURL+"/trending-movies";

  static TopRated = AppURL.BaseURL+"/toprated-movies";

  static Action = AppURL.BaseURL+"/action-movies";

  static Comedy = AppURL.BaseURL+"/comedy-movies";

  static Horror = AppURL.BaseURL+"/horror-movies";

  static Romance = AppURL.BaseURL+"/romance-movies";
  
  static Documentary = AppURL.BaseURL+"/documentaries";



}

export default AppURL
