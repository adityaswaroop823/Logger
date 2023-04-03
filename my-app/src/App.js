import React, { useState, useEffect } from "react";

function InputWithDropdown() {
    const [selectedOption, setSelectedOption] = useState("Option 1");
    const [showinput, setShowInput] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [loglimit, setLoglimits] = useState("");
    const [loglimitdaily, setLoglimitsdaily] = useState("");

    const [logformat, setLogformat] = useState("");
    const [subscriptiontype, setSubscriptiontype] = useState("");
    const [showlogs, setShowlogs] = useState(false);
    const [data, setData] = useState([]);

    const [filterValue, setFilterValue] = useState("");
    const [level, setLevel] = useState("");
    const [client, setClient] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [traceid, setTraceid] = useState("");
    const [indentifier, setIndentifier] = useState("");
    const [accesskey, setAccesskey] = useState("");

    const dataget = [
        {
            Type: "error",
            data: "data log data",
            date: "Date",
            TraceId: "",
            Identifier: "",
        },
        {
            Type: "warning",
            data: "data log data",
            date: "Date",
            TraceId: "",
            Identifier: "",
        },
        {
            Type: "info",
            data: "data log data",
            date: "Date",
            TraceId: "",
            Identifier: "",
        },
    ];
    const filteredData = dataget.filter(
        (item) =>
            item.Type.toLowerCase().includes(filterValue.toLowerCase()) ||
            item.data.toLowerCase().includes(filterValue.toLowerCase()) ||
            item.date.toLowerCase().includes(filterValue.toLowerCase()) ||
            item.TraceId.toLowerCase().includes(filterValue.toLowerCase()) ||
            item.Identifier.toLowerCase().includes(filterValue.toLowerCase())
    );
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === "Option 1") {
            setShowInput(true);
        } else if (selectedOption === "Option 2") {
            // handleGetRequest();

            setShowlogs(true);
        }
        // setShowsecondpage(true);
    };
    function handleLevelChange(event) {
        setLevel(event.target.value);
    }

    function handleMessageChange(event) {
        setClient(event.target.value);
    }

    function handleStartDateChange(event) {
        setStartDate(event.target.value);
    }
    function handleAccessChange(event) {
        setAccesskey(event.target.value);
    }

    function handleEndDateChange(event) {
        setEndDate(event.target.value);
    }
    function handleTraceChange(event) {
        setTraceid(event.target.value);
    }
    function handleIndetifierChange(event) {
        setIndentifier(event.target.value);
    }
    const handleGetRequest = () => {
       
        var myHeaders = new Headers();
        myHeaders.append("accessKey", accesskey);

        var raw = "";

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        // alert("http://localhost:3001/logger/download +`?Identifier=${indentifier}&startDate=${startDate}&clientId=${client}&EndDate=${endDate}&TraceId=${traceid}&level=${level}}`")

        fetch(
            "http://localhost:3001/logger/download +`?Identifier=${indentifier}&startDate=${startDate}&clientId=${client}&EndDate=${endDate}&TraceId=${traceid}&level=${level}}`",
            requestOptions
        )
        // fetch(
        //     "localhost:3001/logger/download?Identifier=/get/users&startDate=2023-04-02&clientId=2&EndDate=2023-04-02&TraceId=123&level=Warning",
        //     requestOptions
        // )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    // const handleGetRequest = () => {
    //     fetch("https://example.com/api/data")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("Network response was not ok");
    //             }
    //             return response.json();
    //         })
    //         .then((responseJson) => {
    //             // handle response
    //             console.log(responseJson);
    //         })
    //         .catch((error) => {
    //             // handle error
    //             console.error("There was a problem with the fetch operation:", error);
    //         });
    // };

    const handleformSubmit = (event) => {
        event.preventDefault();
        const data = {
            organizationId: id,
            name: name,
            subscriptionType: subscriptiontype,
            logLimits: {
                Monthly: loglimit,
                Daily: loglimitdaily,
            },
            logFormats: [logformat],
            // id: id,
            // name: name,
            // loglimit: loglimit,
            // loglimitdaily: loglimitdaily,

            // logformat: logformat,
            // subscriptiontype: subscriptiontype,
        };
        console.log(data);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            data,
        });
        window.location.reload(true);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        fetch("/client/", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    // useEffect(() => {
    //     // fetch data from API and set state with response data
    //     fetch("https://example.com/api/data")
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    //         .catch((error) => console.log(error));
    // }, []);
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundImage:
                    "url('https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148429738.jpg?w=2000&t=st=1680464807~exp=1680465407~hmac=ff30086546d458223cf6f0d13a59b3f8442cabe5e72af76291879121ff3e1a77')",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",

                    width: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "50px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {!showinput && !showlogs && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "15px",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <label
                            htmlFor="dropdown"
                            style={{ display: "flex", width: "50%", color: "white", justifyContent: "center" }}
                        >
                            Select an option:
                        </label>
                        <select
                            style={{ display: "flex", justifyContent: "center", width: "50%", height: "50px" }}
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="Option 1">
                                {" "}
                                <p style={{ fontSize: "580px" }}> Create Client</p>{" "}
                            </option>
                            <option value="Option 2">View Logs</option>
                        </select>
                    </div>
                )}

                {showinput && (
                    <div style={{ width: "80%" }}>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label
                                    style={{ display: "flex", color: "white", fontSize: "18px", width: "100%" }}
                                    htmlFor="client"
                                >
                                    Organization Id:
                                </label>
                                <input
                                    id="client"
                                    type="text"
                                    style={{ height: "40px" }}
                                    placeholder="Id"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label
                                    style={{ display: "flex", color: "white", fontSize: "18px" }}
                                    htmlFor="startDate"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    style={{ height: "40px" }}
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label htmlFor="dropdown" style={{ display: "flex", color: "white", fontSize: "18px" }}>
                                    Subscription Type
                                </label>
                                <select
                                    style={{ display: "flex", justifyContent: "center", height: "50px" }}
                                    id="subscriptiontype"
                                    value={subscriptiontype}
                                    onChange={(e) => setSubscriptiontype(e.target.value)}
                                >
                                    <option value="Yearly">
                                        {" "}
                                        <p style={{ fontSize: "580px" }}> Yearly</p>{" "}
                                    </option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quaterly">Quaterly</option>
                                </select>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label
                                    style={{ display: "flex", color: "white", fontSize: "18px", width: "100%" }}
                                    htmlFor="client"
                                >
                                    Log Limits Monthly
                                </label>
                                <input
                                    id="client"
                                    type="text"
                                    style={{ height: "40px" }}
                                    placeholder="Monthly"
                                    value={loglimit}
                                    onChange={(e) => setLoglimits(e.target.value)}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label
                                    style={{ display: "flex", color: "white", fontSize: "18px", width: "100%" }}
                                    htmlFor="client"
                                >
                                    Log Limits Daily
                                </label>
                                <input
                                    id="client"
                                    type="text"
                                    style={{ height: "40px" }}
                                    placeholder="Daily"
                                    value={loglimitdaily}
                                    onChange={(e) => setLoglimitsdaily(e.target.value)}
                                />
                                <label htmlFor="dropdown" style={{ display: "flex", color: "white", fontSize: "18px" }}>
                                    Log Formats
                                </label>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label style={{ color: "white", fontSize: "22px" }}>
                                        <input
                                            type="checkbox"
                                            value="JSON"
                                            checked={logformat.includes("JSON")}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setLogformat([...logformat, e.target.value]);
                                                } else {
                                                    setLogformat(
                                                        logformat.filter((option) => option !== e.target.value)
                                                    );
                                                }
                                            }}
                                        />
                                        JSON
                                    </label>
                                    <label style={{ color: "white", fontSize: "22px" }}>
                                        <input
                                            type="checkbox"
                                            value="TEXT"
                                            checked={logformat.includes("TEXT")}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setLogformat([...logformat, e.target.value]);
                                                } else {
                                                    setLogformat(
                                                        logformat.filter((option) => option !== e.target.value)
                                                    );
                                                }
                                            }}
                                        />
                                        TEXT
                                    </label>
                                    <label style={{ color: "white", fontSize: "22px" }}>
                                        <input
                                            type="checkbox"
                                            value=" XML"
                                            checked={logformat.includes(" XML")}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setLogformat([...logformat, e.target.value]);
                                                } else {
                                                    setLogformat(
                                                        logformat.filter((option) => option !== e.target.value)
                                                    );
                                                }
                                            }}
                                        />
                                        XML
                                    </label>
                                    <label style={{ color: "white", fontSize: "22px" }}>
                                        <input
                                            type="checkbox"
                                            value="File "
                                            checked={logformat.includes("File ")}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setLogformat([...logformat, e.target.value]);
                                                } else {
                                                    setLogformat(
                                                        logformat.filter((option) => option !== e.target.value)
                                                    );
                                                }
                                            }}
                                        />
                                        File
                                    </label>
                                </div>
                            </div>

                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                {" "}
                                <button
                                    style={{ height: "40px", fontSize: "22px", width: "40%" }}
                                    type="submit"
                                    onClick={handleformSubmit}
                                >
                                    Create Client
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {showlogs && (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Type
                                <input type="text" value={level} onChange={handleLevelChange} />
                            </label>
                            <br />
                            <label>
                                Access Key
                                <input type="text" value={accesskey} onChange={handleAccessChange} />
                            </label>
                            <br />
                            <label>
                                Client
                                <input type="text" value={client} onChange={handleMessageChange} />
                            </label>
                            <br />
                            <label>
                                Trace Id
                                <input type="text" value={traceid} onChange={handleTraceChange} />
                            </label>
                            <br />
                            <label>
                                Indentifier
                                <input type="text" value={indentifier} onChange={handleIndetifierChange} />
                            </label>
                            <br />
                            <label>
                                Start Date:
                                <input type="date" value={startDate} onChange={handleStartDateChange} />
                            </label>
                            <br />
                            <label>
                                End Date:
                                <input type="date" value={endDate} onChange={handleEndDateChange} />
                            </label>
                            <br />
                            <button onClick={handleGetRequest}>
                                Filter Logs
                            </button>
                        </form>
                        <table style={{ border: "1px solid white" }}>
                            <thead style={{ gap: "10px" }}>
                                <tr style={{ border: "1px solid white" }}>
                                    <th
                                        style={{ border: "1px solid white", padding: "15px", backgroundColor: "white" }}
                                    >
                                        Column 1
                                    </th>
                                    <th
                                        style={{ border: "1px solid white", padding: "15px", backgroundColor: "white" }}
                                    >
                                        Column 2
                                    </th>
                                    <th
                                        style={{ border: "1px solid white", padding: "15px", backgroundColor: "white" }}
                                    >
                                        Column 3
                                    </th>
                                    <th
                                        style={{ border: "1px solid white", padding: "15px", backgroundColor: "white" }}
                                    >
                                        Column 4
                                    </th>
                                    <th
                                        style={{ border: "1px solid white", padding: "15px", backgroundColor: "white" }}
                                    >
                                        Column 5
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{ border: "1px solid white" }}>
                                {dataget.map((item, index) => (
                                    <tr key={index} style={{ border: "1px solid white" }}>
                                        {item.Type === "error" && (
                                            <>
                                                <td style={{ border: "1px solid white", backgroundColor: "red" }}>
                                                    {item.Type}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "red" }}>
                                                    {item.data}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "red" }}>
                                                    {item.date}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "red" }}>
                                                    {item.TraceId}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "red" }}>
                                                    {item.Identifier}
                                                </td>
                                            </>
                                        )}
                                        {item.Type === "warning" && (
                                            <>
                                                <td style={{ border: "1px solid white", backgroundColor: "yellow" }}>
                                                    {item.Type}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "yellow" }}>
                                                    {item.data}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "yellow" }}>
                                                    {item.date}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "yellow" }}>
                                                    {item.TraceId}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "yellow" }}>
                                                    {item.Identifier}
                                                </td>
                                            </>
                                        )}
                                        {item.Type === "info" && (
                                            <>
                                                <td style={{ border: "1px solid white", backgroundColor: "green" }}>
                                                    {item.Type}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "green" }}>
                                                    {item.data}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "green" }}>
                                                    {item.date}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "green" }}>
                                                    {item.TraceId}
                                                </td>
                                                <td style={{ border: "1px solid white", backgroundColor: "green" }}>
                                                    {item.Identifier}
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!showinput && (
                    <button
                        type="submit"
                        style={{ fontSize: "30px", width: "30%", display: "flex", justifyContent: "center" }}
                    >
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
}

export default InputWithDropdown;
