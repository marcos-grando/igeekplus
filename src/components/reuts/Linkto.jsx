
function Linkto({ type, data }) {

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .replace(/-+/g, "-")
            .trim();
    };

    switch (type) {

        case "init":
            return "/";

        case "rota1":
            return "/animes";
        case "rota1-slug":
            return `/animes/${generateSlug("00" + data.id + "-" + data.title)}`;

        case "rota2":
            return "/series";
        case "rota2-slug":
            return `/series/${generateSlug("00" + data.id + "-" + data.title)}`;

        case "rota3":
            return "/filmes";
        case "rota3-slug":
            return `/filmes/${generateSlug("00" + data.id + "-" + data.title)}`;

        case "rota4":
            return "/animacoes";
        case "rota4-slug":
            return `/animacoes/${generateSlug("00" + data.id + "-" + data.title)}`;

        case "rota5":
            return "/search";

        default:
            return "/";
    };
};

export default Linkto;