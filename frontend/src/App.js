import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Body from "./body"; // Vérifie que ce fichier existe
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';

const baseURL = "http://backend:8080/api";
function App() {
  

  const get_id = useRef(null);
  const get_title = useRef(null);

  const post_title = useRef(null);
  const post_description = useRef(null);

  const put_id = useRef(null);
  const put_title = useRef(null);
  const put_description = useRef(null);
  const put_published = useRef(null);

  const delete_id = useRef(null);

  const [getResult, setGetResult] = useState(null);
  const [postResult, setPostResult] = useState(null);
  const [putResult, setPutResult] = useState(null);
  const [deleteResult, setDeleteResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function getAllData() {
    try {
      const res = await fetch(`${baseURL}/tutorials`);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        length: res.headers.get("Content-Length"),
        data: data,
      };

      setGetResult(fortmatResponse(result));
    } catch (err) {
      setGetResult(err.message);
    }
  }

  async function getDataById() {
    const id = get_id.current.value;

    if (id) {
      try {
        const res = await fetch(`${baseURL}/tutorials/${id}`);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          data: data,
          status: res.status,
          statusText: res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
        };

        setGetResult(fortmatResponse(result));
      } catch (err) {
        setGetResult(err.message);
      }
    }
  }

  async function getDataByTitle() {
    const title = get_title.current.value;

    if (title) {
      try {
        // const res = await fetch(`${baseURL}/tutorials?title=${title}`);

        let url = new URL(`${baseURL}/tutorials`);
        const params = { title: title };
        url.search = new URLSearchParams(params);

        const res = await fetch(url);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          data: data,
        };

        setGetResult(fortmatResponse(result));
      } catch (err) {
        setGetResult(err.message);
      }
    }
  }

  async function postData() {
    const postData = {
      title: post_title.current.value,
      description: post_description.current.value,
    };

    try {
      const res = await fetch(`${baseURL}/tutorials`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }

  async function putData() {
    const id = put_id.current.value;

    if (id) {
      const putData = {
        title: put_title.current.value,
        description: put_description.current.value,
        published: put_published.current.checked,
      };

      try {
        const res = await fetch(`${baseURL}/tutorials/${id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
          },
          body: JSON.stringify(putData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: { "Content-Type": res.headers.get("Content-Type") },
          data: data,
        };

        setPutResult(fortmatResponse(result));
      } catch (err) {
        setPutResult(err.message);
      }
    }
  }

  async function deleteAllData() {
    try {
      const res = await fetch(`${baseURL}/tutorials`, { method: "delete" });

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: { "Content-Type": res.headers.get("Content-Type") },
        data: data,
      };

      setDeleteResult(fortmatResponse(result));
    } catch (err) {
      setDeleteResult(err.message);
    }
  }

  async function deleteDataById() {
    const id = delete_id.current.value;

    if (id){
      try {
        const res = await fetch(`${baseURL}/tutorials/${id}`, { method: "delete" });

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: { "Content-Type": res.headers.get("Content-Type") },
          data: data,
        };

        setDeleteResult(fortmatResponse(result));
      } catch (err) {
        setDeleteResult(err.message);
      }
    }
  }

  const clearGetOutput = () => {
    setGetResult(null);
  }

  const clearPostOutput = () => {
    setPostResult(null);
  }

  const clearPutOutput = () => {
    setPutResult(null);
  }

  const clearDeleteOutput = () => {
    setDeleteResult(null);
  }

const App = () => {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        </Layout>
      </Router>
  );
};
}

export default App;
