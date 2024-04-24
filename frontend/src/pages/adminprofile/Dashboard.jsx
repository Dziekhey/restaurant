import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth";
import useQueryOwners from "../../Hooks/useQueryOwner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Switch from "react-switch";

const Dashboard = () => {
  const auth = useAuth();
 const ownerToken = localStorage.getItem("ownerToken");
 const ownerId = localStorage.getItem("ownerId");



  const { owner, loading } = useQueryOwners(ownerId);

  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);



  const handleChange = async (nextChecked) => {
    setChecked(nextChecked);

    try {
      // const formData = new FormData(event.target);
      // setStatus(owners.restaurant.status === 'closed'? "closed" : "open");
      const response = await fetch(
        `http://localhost:4000/restaurants/${owner.restaurant._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            status: checked ? "Open" : "Closed",
          }),
        }
      );
      // console.log (await response)

      if (response.status !== 200) {
        // const data = await response.json();
        toast.error("failed to update status");
      } else {
        toast.success("Restaurant status was updated successfully");
        navigate("/adminprofile/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    auth.logOut();
  };

  // const handleStatus = async (event) => {
  //   try {
  //     event.preventDefault();

  //     // const formData = new FormData(event.target);
  //     // setStatus(owners.restaurant.status === 'closed'? "closed" : "open");
  //     const response = await fetch(
  //       `http://localhost:4000/restaurants/${owners.restaurant._id}`,
  //       {
  //         method: "PATCH",
  //         body: JSON.stringify({
  //           status: status,
  //         }),
  //       }
  //     );

  //     if (response.status !== 201) {
  //       // const data = await response.json();
  //       toast.error("failed to update status");
  //     } else {
  //       toast.success("Restaurant status was updated successfully");
  //       navigate("/adminprofile/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!ownerToken) navigate("/account/admin/login");
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        owner &&
        owner.restaurant && (
          <div className="lg:px-20 px-5 ">
            <div className="pb-5 flex justify-center items-center gap-5">
              <h1 className="text-2xl lg:text-5xl text-center font-bold px-5 pt-4">
                {owner.restaurant.name}
              </h1>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="flex flex-col items-center justify-center">
                  <AccountCircleIcon sx={{ fontSize: "7rem" }} />
                  <div>
                    <Button
                      onClick={handleLogout}
                      variant="contained"
                      sx={{
                        margin: "1rem 2rem",
                        color: "#3c2a0c",
                        backgroundColor: "#d99e06",
                        "&:hover": {
                          backgroundColor: "#917617",
                        },
                      }}
                    >
                      Logout
                    </Button>
                    {/* <Button
                      onClick={handleStatus}
                      variant="contained"
                      color={status ? "primary" : "error"}
                      sx={{ margin: "1rem 2rem" }}
                    >
                      {owner.restaurant.status }
                    </Button> */}
                    <Switch
                      onChange={handleChange}
                      checked={checked}
                      className="react-switch"
                      onColor="#86d3ff"
                      onHandleColor="#2693e6"
                      handleDiameter={30}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={20}
                      width={48}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card>
                  <CardHeader title={<span className="">Restaurant</span>} />
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex">
                        <p className="w-48">Owner</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.name}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Cuisine type</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.cuisineType}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Opening Days</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.openingDays}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Opening Hours</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.openingHours}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Status</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.status}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Card>
                  <CardHeader
                    title={<span className="">Location and Contact</span>}
                  />
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex">
                        <p className="w-48">Region</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.region}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">City</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.city}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Town</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.town}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Email</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.email}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="w-48">Mobile</p>
                        <p>
                          <span className="pr-5">-</span>
                          {owner.restaurant.telephone}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        )
      )}
    </>
  );
};

export default Dashboard;
