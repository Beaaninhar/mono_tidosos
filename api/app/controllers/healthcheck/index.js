const healthcheck = (req, res) => {
    return res.status(200).json({ data: "Olá, mundo!" });
};

export { healthcheck };