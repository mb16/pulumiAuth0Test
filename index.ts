import * as pulumi from "@pulumi/pulumi";
import * as auth0 from "@pulumi/auth0";

const group = new auth0.Role("PulumiGroup", {
    name: "PulumiGroup1",
    description: "First Pulumi Group",
}); 