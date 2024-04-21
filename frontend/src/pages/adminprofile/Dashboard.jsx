import React from "react";
import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth";

const Dashboard = () => {

  const auth = useAuth();
  if (!auth.token) return <Navigate to="/account/admin/login" />;

  const handleLogout = () => {
    auth.logOut();
  };

  const handleStatus = () => {};

  return (
    <>
      <div className="lg:px-20 px-5 ">
        <div className="pb-5 flex justify-center items-center gap-5">
          <h1 className="text-2xl lg:text-5xl text-center font-bold px-5 pt-4">
            Restaurant's Name
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
            sx={{ margin: "1rem 2rem", color: "#3c2a0c",
            backgroundColor: "#d99e06",
            "&:hover": {
              backgroundColor: "#917617",
            }, }}
          >
            Logout
          </Button>
          <Button
            onClick={handleStatus}
            variant="contained"
            color={true ? "primary" : "error"}
            sx={{ margin: "1rem 2rem"}}
          >
            {true ? "close" : "open"}
          </Button>
          </div>
        </div>
          </Grid>
          <Grid  item xs={12} lg={6}>
            <Card>
              <CardHeader title={<span className="">Restaurant</span>} />
              <CardContent>
                <div className="space-y-4">
                  <div className="flex">
                    <p className="w-48">Owner</p>
                    <p>
                      <span className="pr-5">-</span>
                      Owner's Name
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Restaurant's Name</p>
                    <p>
                      <span className="pr-5">-</span>
                      ABC Restaurant
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Cuisine type</p>
                    <p>
                      <span className="pr-5">-</span>
                      Ghanaian
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Opening Hours</p>
                    <p>
                      <span className="pr-5">-</span>
                      09:00AM-10:00PM
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Status</p>
                    <p>
                      <span className="pr-5">-</span>
                      {true? <span className="px-5 py-2 rounded-full bg-green-400">Open</span>: <span className="px-5 py-2 rounded-full bg-red-400">Closed</span> }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title={<span className="">Location and Contact</span>} />
              <CardContent>
                <div className="space-y-4">
                  <div className="flex">
                    <p className="w-48">Region</p>
                    <p>
                      <span className="pr-5">-</span>
                     Greater Accra
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">City</p>
                    <p>
                      <span className="pr-5">-</span>
                      Accra
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Town</p>
                    <p>
                      <span className="pr-5">-</span>
                      East Legon
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Email</p>
                    <p>
                      <span className="pr-5">-</span>
                     abc@gmail.com
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-48">Mobile</p>
                    <p>
                      <span className="pr-5">-</span>
                    1234567899
                    </p>
                  </div>
                 
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
