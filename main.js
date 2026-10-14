* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f7fb;
  color: #172033;
}


/* ================= TOP BAR ================= */

.topbar {
  background: linear-gradient(135deg, #c9184a, #7b1234);
  color: white;
  padding: 20px 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topbar h1 {
  font-size: 28px;
}

.topbar p {
  margin-top: 5px;
  opacity: 0.9;
}

.status {
  background: rgba(255,255,255,0.15);
  padding: 10px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

#connectionDot {
  width: 10px;
  height: 10px;
  background: #42ff83;
  border-radius: 50%;
}


/* ================= CONTAINER ================= */

.container {
  width: 92%;
  max-width: 1300px;
  margin: 30px auto;
}


/* ================= PATIENT ================= */

.patient-card {
  background: white;
  padding: 22px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.patient-card h2 {
  margin-bottom: 5px;
}

.patient-info {
  background: #f4f6fa;
  padding: 12px 18px;
  border-radius: 10px;
}


/* ================= EMERGENCY ================= */

.emergency {
  padding: 20px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.emergency.normal {
  background: #e9f9ef;
  border: 1px solid #a9e7bb;
}

.emergency.danger {
  background: #ffe5e5;
  border: 1px solid #ff8e8e;
  animation: dangerPulse 1s infinite;
}

.emergency button {
  background: #d90429;
  border: none;
  color: white;
  padding: 13px 20px;
  border-radius: 9px;
  font-weight: bold;
  cursor: pointer;
}

@keyframes dangerPulse {
  50% {
    box-shadow: 0 0 20px rgba(217,4,41,0.3);
  }
}


/* ================= HEALTH CARDS ================= */

.health-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 25px;
}

.health-card {
  background: white;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.health-card .icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.health-card h3 {
  color: #555;
  font-size: 16px;
}

.value {
  margin: 12px 0;
  font-size: 38px;
  font-weight: bold;
}

.value small {
  font-size: 15px;
  color: #777;
}

.health-card p {
  color: #299c5b;
  font-weight: bold;
}


/* ================= PANELS ================= */

.panel {
  background: white;
  padding: 22px;
  border-radius: 16px;
  margin-bottom: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.panel-header p {
  color: #777;
  margin-top: 5px;
}

.live {
  color: #d90429;
  font-weight: bold;
}


/* ================= ECG ================= */

.ecg-container {
  height: 320px;
  position: relative;
  background:
    linear-gradient(rgba(200,0,0,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200,0,0,0.06) 1px, transparent 1px);
  background-size: 20px 20px;
  border-radius: 10px;
  padding: 10px;
}


/* ================= TWO COLUMN ================= */

.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}


/* ================= LOCATION ================= */

.location-data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.location-data div {
  background: #f5f7fa;
  padding: 15px;
  border-radius: 10px;
}

.location-data span {
  display: block;
  color: #777;
  font-size: 13px;
  margin-bottom: 7px;
}

.map-button {
  margin-top: 15px;
  padding: 12px 18px;
  border: none;
  background: #1769aa;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}


/* ================= CONTACT ================= */

.contact {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.contact-icon {
  font-size: 25px;
}

.contact div:nth-child(2) {
  flex: 1;
}

.contact p {
  color: #777;
  margin-top: 4px;
}

.contact button {
  border: none;
  background: #299c5b;
  color: white;
  padding: 8px 15px;
  border-radius: 7px;
  cursor: pointer;
}


/* ================= TABLE ================= */

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background: #f5f7fa;
}

.normal-status {
  color: #299c5b;
  font-weight: bold;
}

.alert-status {
  color: #d90429;
  font-weight: bold;
}


/* ================= BUTTON ================= */

.clear-btn {
  border: none;
  padding: 8px 15px;
  border-radius: 7px;
  cursor: pointer;
}


/* ================= MEDICINE ================= */

.medicine-form {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.medicine-form input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.medicine-form input[type="text"] {
  flex: 1;
}

.medicine-form button {
  border: none;
  background: #6f42c1;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
}

.medicine-item {
  padding: 14px;
  background: #f5f3ff;
  border-radius: 9px;
  margin-bottom: 8px;
}


/* ================= WARNING ================= */

.warning {
  background: #fff8e6;
  border: 1px solid #f0d58a;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 25px;
}

.warning h3 {
  margin-bottom: 10px;
}

.warning p {
  margin-bottom: 8px;
  line-height: 1.5;
}


/* ================= FOOTER ================= */

footer {
  text-align: center;
  background: #172033;
  color: white;
  padding: 20px;
}


/* ================= MOBILE ================= */

@media (max-width: 900px) {

  .health-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .two-column {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 600px) {

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .patient-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .health-grid {
    grid-template-columns: 1fr;
  }

  .location-data {
    grid-template-columns: 1fr;
  }

  .medicine-form {
    flex-direction: column;
  }

  .emergency {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .ecg-container {
    height: 250px;
  }

}