import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mengambil data dari GitHub API
  useEffect(() => {
    fetch("https://api.github.com/users/Salmanars")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Menyimpan data pengguna ke state
        setLoading(false); // Menandakan bahwa data sudah selesai diambil
      })
      .catch((err) => {
        setError(err); // Menangani error jika gagal mengambil data
        setLoading(false);
      });
  }, []);

  // Menampilkan loading atau error jika data belum tersedia
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <section className="section">
        <div className="container" style={{ marginTop: 10 }}>
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">About Me</h2>
              <p className="text-center">
                Hello! I'm Salman, a passionate developer and technology enthusiast, specializing in creating impactful digital experiences.
              </p>
              <div className="text-center">
                <img
                  src={userData.avatar_url}
                  alt={userData.name}
                  className="rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <h4>Salman Arya Sandytia</h4>
                <p>21120122140146</p>
                <p>Semarang</p>
              </div>
              <div className="mt-4">
                <h5>Contact Me</h5>
                <p>Email: {userData.email || "Not available"}</p>
                <p>
                  GitHub:{" "}
                  <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.login}
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <h5>About My Work</h5>
                <p>
                  I love developing intuitive and innovative solutions in web and mobile applications. Visit my GitHub to explore my projects and contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
