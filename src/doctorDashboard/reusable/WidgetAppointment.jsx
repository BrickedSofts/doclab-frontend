import React from "react";
import { Flex, Image, Td, Text, Tr, Box } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { TIME_FORMAT } from "../../assets/variable/values";

const WidgetAppointment = ({
  appointment,
  setChangedAppointmentId,
  setAcceptedAppointment,
  changedAppointmentId,
}) => {
  const style = {
    icon: {
      "--ionicon-stroke-width": "3.6rem",
    },
  };

  const ActionIcons = [
    {
      icon: "close-circle-outline",
      iconColor: "#ff6b6b",
      onclick: () => {
        setChangedAppointmentId(appointment.appointmentId);
        setAcceptedAppointment(false);
      },
    },
    {
      icon: "checkmark-circle-outline",
      iconColor: "#40c057",
      onclick: () => {
        setChangedAppointmentId(appointment.appointmentId);
        setAcceptedAppointment(true);
      },
    },
  ];

  const renderedActionIcons = ActionIcons.map((value, index) => {
    return (
      <Box
        key={index}
        transition={"all .3s"}
        _hover={{
          transform: "scale(1.2)",
        }}
      >
        <ion-icon
          name={value.icon}
          style={{ color: value.iconColor, fontSize: "2rem", ...style.icon }}
          onClick={value.onclick}
        ></ion-icon>
      </Box>
    );
  });

  if (changedAppointmentId == appointment.appointmentId) return null;

  return (
    <Tr
      cursor="pointer"
      color="font.focused"
      fontSize="lg"
      fontWeight="regular"
      transition="all 0.3s"
      borderRadius="2xl"
      _hover={{ boxShadow: "0 0.6rem 1.2rem rgba(0, 0, 0, 0.08)" }}
    >
      <Td overflow="hidden" py="8" px="16">
        <Flex columnGap="12" alignItems="center">
          <Image
            src={
              appointment.patientImageUUID
                ? "https://ucarecdn.com/" + appointment.patientImageUUID + "/"
                : faker.image.avatar()
            }
            alt="avatar"
            boxSize="3.6rem"
            borderRadius="full"
          />
          <Text>{appointment.patientName}</Text>
        </Flex>
      </Td>
      <Td overflow="hidden" px="16">
        {appointment.patientAge ? appointment.patientAge : 19}
      </Td>
      <Td overflow="hidden" px="16">
        {new Date(appointment.appointmentSlotDate).toDateString()}
      </Td>
      <Td overflow="hidden" px="16">
        {new Date(appointment.appointmentSlotDate).toLocaleTimeString(
          [],
          TIME_FORMAT
        )}
      </Td>
      <Td>
        <Flex alignItems="center" columnGap="12">
          {renderedActionIcons}
        </Flex>
      </Td>
    </Tr>
  );
};

export default WidgetAppointment;
