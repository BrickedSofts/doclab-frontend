import React, { useState } from "react";
import { useEffect } from "react";
// import { faker } from "@faker-js/faker";
import theme from "../../styling/theme.jsx";

const TimeSlot = () => {
  const TODAY = new Date();
  const TOMORROW = new Date();
  TOMORROW.setDate(TOMORROW.getDate() + 1);
  const DATE_FOTMAT = {
    // weekday: "short",
    month: "short",
    day: "numeric",
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    let tempDate = new Date();
    tempDate.setDate(tempDate.getDate() + increment);
    // console.log(tempDate);
    setSelectedDate(tempDate);
  }, [increment]);

  const style = {
    icon: {
      fontSize: "1.4rem",
      "--ionicon-stroke-width": "4.8rem",
    },

    iconRounded: {
      padding: ".4rem",
      borderRadius: "50%",
    },

    iconAndText: {
      display: "flex",
      alignItems: "center",
      gap: ".8rem",
    },
    span: {
      fontColor: "#333",
      fontWeight: "600",
      marginRight: ".4rem",
    },
  };

  // console.log("selected date: " + selectedDate.toLocaleDateString());

  const renderedDate = (
    <p
      style={{
        borderBottom: "1px solid blue",
        color: "#333",
        fontWeight: "600",
        paddingBottom: ".3rem",
      }}
    >
      {selectedDate.toLocaleDateString() === TODAY.toLocaleDateString()
        ? "Today"
        : selectedDate.toLocaleDateString() === TOMORROW.toLocaleDateString()
        ? "Tomorrow"
        : selectedDate.toLocaleDateString("en-US", DATE_FOTMAT)}
    </p>
  );

  const scheduleGenerator = (times, period) => {
    const render = times.map((time, index) => {
      return (
        <p
          key={index}
          style={{
            display: "inline-block",
            color: `${theme.colors.primary.base}`,
            fontSize: "1rem",
            padding: ".4rem .8rem",
            border: `1px solid ${theme.colors.primary.base}`,
            borderRadius: ".5rem",
            whiteSpace: "nowrap",
          }}
        >
          {time} {period}
        </p>
      );
    });

    return render;
  };

  return (
    <>
      <style>
        {`
         .time-slot ion-icon:hover {
          background-color: rgba(28, 126, 214) !important;
          box-shadow: inset 0 0 0 0.25rem rgba(28, 126, 214, 0.25),  0 0 1.2rem rgba(28, 126, 214, 0.5) !important;
         }

         .time-slot ion-icon:active {
            transform: scale(1.2);
         }

         ::-webkit-scrollbar {
          height: .8rem;
        }
        `}
      </style>
      <div
        style={{
          fontSize: "1.4rem",
          padding: "1.6rem 1.6rem 0",
          backgroundColor: `${theme.typography.colors.background.personCard}`,
          borderRadius: "1.1rem",
          borderBottomRightRadius: "1.1rem",
          height: "100%",
        }}
      >
        {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "1.4rem", marginBottom: ".4rem" }}>
          {selectedPerson[`${category}ClinicName`]}
        </h3> */}

        {/* <p
          style={{
            color: "#767676",
            fontSize: "1rem",
            marginBottom: "1rem",
            letterSpacing: "0.05rem",
          }}
        >
          {`Time slots`.toUpperCase()}
        </p> */}
        {/* </div> */}

        {/* <div style={{ display: "flex", gap: "1.6rem", marginBottom: ".8rem" }}>
        <div
          style={{
            fontSize: "1.2rem",
            marginBottom: ".6rem",
          }}
        >
          <p>
            <span style={{ marginRight: ".2rem" }}>&#2547;</span>
            <span style={{ ...style.span, margin: "0" }}>
              {selectedPerson[`${category}VisitingFee`]}
            </span>
          </p>
        </div>
      </div> */}

        {/* <p style={{ fontSize: "1.2rem" }}>
              {theme.methods.capitalize(selectedPerson[`${category}SubDistrict`])}
            </p> */}

        <div
          className="time-slot"
          style={{
            fontSize: "1.3rem",
            display: "flex",
            gap: "1.2rem",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2.4rem",
          }}
        >
          <ion-icon
            className="btn"
            role={"button"}
            tabIndex={0}
            onClick={() => {
              if (
                selectedDate.toLocaleDateString() !== TODAY.toLocaleDateString()
              ) {
                setIncrement(increment - 1);
              }
            }}
            style={{
              ...style.icon,
              ...style.iconRounded,
              fontSize: "1.4rem",
              padding: ".4rem",
              color: "#fff",
              backgroundColor: "rgba(28, 126, 214, .70)",
              boxShadow: "0 .4rem .4rem rgba(0, 0, 0, .15)",
              cursor: "pointer",
              transition: "all .3s",
            }}
            name="chevron-back-outline"
          ></ion-icon>
          {renderedDate}
          <ion-icon
            className="btn"
            role={"button"}
            tabIndex={0}
            onClick={() => {
              setIncrement(increment + 1);
            }}
            style={{
              ...style.icon,
              ...style.iconRounded,
              fontSize: "1.4rem",
              padding: ".4rem",
              color: "#fff",
              backgroundColor: "rgba(28, 126, 214, .70)",
              boxShadow: "0 .4rem .4rem rgba(0, 0, 0, .15) ",
              cursor: "pointer",
              transition: "all .3s",
            }}
            name="chevron-forward-outline"
          ></ion-icon>
        </div>

        <div
          style={{
            paddingBottom: "1.2rem",
            overflowX: "scroll",
            marginBottom: ".4rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: "500",
              color: `${theme.colors.font.focused}`,
              margin: ".8rem 0",
            }}
          >
            Morning
          </h3>
          <div style={{ display: "flex", gap: ".8rem" }}>
            {scheduleGenerator(["08:00", "08:30", "09:00"], "AM")}
          </div>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: "500",
              color: `${theme.colors.font.focused}`,
              margin: ".8rem 0",
            }}
          >
            Evening
          </h3>
          <div style={{ display: "flex", gap: ".8rem" }}>
            {scheduleGenerator(
              [
                "05:00",
                "05:30",
                "06:00",
                "06:30",
                "07:00",
                "07:30",
                "08:00",
                "08:30",
                "09:00",
              ],
              "PM"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSlot;
