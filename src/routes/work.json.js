import {
    projects
} from './_work';

export function get(req, res, next) {
    res.end(JSON.stringify(projects));
}