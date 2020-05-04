const { version } = require("../package.json");

const dev = {
    api: {
        user: "http://localhost:3030",
        execution: "http://localhost:3060",
        touch: "http://localhost:4010"
    },
    web: {
        implementation: "http://localhost:3001"
    }
};

const prod = {
    api: {
        user: "https://station-user-api.compliancetotal.com.br",
        execution: "https://station-execution-api.compliancetotal.com.br",
        touch: "https://iplus-api.compliancetotal.com.br"

    },
    web: {
        implementation: "https://app.compliancestation.com.br/implementacao"
    }
};

const config = (process.env.NODE_ENV === "development" ? dev : prod);

export default {
    project_title : "I-Plus",
    version,

    ...config
}