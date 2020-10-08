import axios from "axios";

const headers = {
  Accept: "application/json",
};

export const getFact = () => (dispatch) => {
  console.log("getfact action");
  dispatch({ type: "FETCHING_FACT_START" });
  axios
    .get(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
      { headers: headers }
    )
    .then((res) => {
      dispatch({ type: "FETCHING_FACT_SUCCESS", payload: res.data.text });
      console.log(res);
    })
    .catch((err) => console.log(err, "problem"));
};
