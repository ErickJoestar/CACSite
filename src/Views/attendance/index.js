import React, { useState, useEffect, useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import { AttendanceContext } from "../../Providers/attendanceProvider";

import UserBox from "../../Components/user-box";

import "./style.css";

const CLASS = {
  title: "Introduccion a la programación competitiva",
  date: "11/2/2020",
  isAvailable: true,
  speakers: [
    {
      hasAccount: true,
      uid: "uid de erick",
      displayName: "erickborquez",
      rank: "expert",
      ranking: 1528
    }
  ],
  description:
    "Aqui vamos a dar una descripcion a la introduccion a la programacion competitiva. Aqui vamos a dar una descripcion a la introduccion a la programacion competitiva. Aqui vamos a dar una descripcion a la introduccion a la programacion competitiva.",
  attendances: [
    {
      hasAccount: true,
      uid: "uid de otro wey",
      displayName: "Isaac",
      rank: "pupil"
    },
    {
      hasAccount: true,
      uid: "uid de otro wey",
      displayName: "Isaac",
      rank: "pupil"
    },
    {
      hasAccount: true,
      uid: "uid de otro wey",
      displayName: "Isaac",
      rank: "pupil"
    },
    {
      hasAccount: true,
      uid: "uid de otro wey",
      displayName: "Isaac",
      rank: "pupil"
    },
    {
      hasAccount: true,
      uid: "uid de otro wey",
      displayName: "Isaac",
      rank: "pupil"
    },
    {
      hasAccount: true,
      uid: "uid de otro wey",
      displayName: "Isaac",
      rank: "pupil"
    }
  ]
};

const Attendance = props => {
  const atnContext = useContext(AttendanceContext);
  const [redirect, setRedirect] = useState(false);
  const { preview } = props;
  console.log(props);

  useEffect(() => {
    if (!preview) {
      const { code } = props.match.params;
      if (atnContext.classData.code === "300") {
        setRedirect(true);
        atnContext.setClassData(c => ({ ...c, validCode: false }));
        atnContext.setIsDataAvailable(false);
      }

      if (code !== atnContext.classData.code) {
        console.log("Fetching data");
        setTimeout(() => {
          alert("cambio de clase jejejeje");
          atnContext.setClassData(c => ({
            ...CLASS,
            validCode: true,
            code: code
          }));
          atnContext.setIsDataAvailable(true);
        }, 2000);
      }
    }
  }, [props.match.params, atnContext, preview]);

  const classData = preview ? props.classData : atnContext.classData;

  return (
    <div className="cac_attendance cac_attendance--in-class">
      {redirect && <Redirect to="/attendance" />}
      {(atnContext.isDataAvailable || preview) && (
        <div className="cac_attendance_class">
          <h3 className="cac_attendance_title">{classData.title}</h3>
          <span className="cac_attendance_date">{classData.date}</span>
          <div className="cac_attendance_code-container">
            <span className="cac_attendance_code-title">Code</span>
            <span className="cac_attendance_code-code">{classData.code}</span>
          </div>
          <div className="cac_attendance_speakers-container">
            <span className="cac_attendance_speakers-title">Speakers</span>
            {classData.speakers.map((speaker, i) => (
              <UserBox
                key={i}
                className="cac_attendance_speaker_user-box"
                user={speaker}
              />
            ))}
          </div>
          <div className="cac_attendance_description-container">
            <p className="cac_attendance_description-title">Description</p>
            <p className="cac_attendance_description-text">
              {classData.description}
            </p>
          </div>
          <div className="cac_attendance_attendant-container">
            {classData.attendances.map((at, i) => (
              <UserBox key={i} className="cac_attendance_attendant" user={at} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
