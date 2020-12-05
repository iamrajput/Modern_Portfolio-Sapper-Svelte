import {
    jobs
} from './_menu';

export function get(req, res, next) {
    console.log(jobs)
    res.end(JSON.stringify(jobs));

}