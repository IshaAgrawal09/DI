const GET = () => {
  return (url) =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json());
};

const POST = () => {
  return (url) =>
    fetch(url, {
      method: "POST",
    }).then((res) => res.json());
};

const PUT = () => {
  return (url) =>
    fetch(url, {
      method: "PUT",
    }).then((res) => res.json());
};

const DELETE = () => {
  return (url) =>
    fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
};

export { GET, POST, PUT, DELETE };
