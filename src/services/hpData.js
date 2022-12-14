const hpData = () => {
    return fetch('https://hp-api.herokuapp.com/api/characters')
        .then((response) => response.json())
        .then((data) => {

            const hpDataClean = data.map((pj, index) => {
                return {
                    id: index,
                    name: pj.name,
                    gender: pj.gender,
                    picture: pj.image,
                    species: pj.species,
                    alternateName: pj.alternate_names,
                    house: pj.house || "none",
                    alive: pj.alive,
                    dateOfBirth: pj.dateOfBirth,

                };

            });

            return hpDataClean;
        });
};

export default hpData;


