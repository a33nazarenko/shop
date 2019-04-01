export abstract class BaseService {
    constructor() { }

    public handleError(error: Response | any) {
        let errMsg: string;
        const errorMessage: string = error;
        if (errorMessage) {
            errMsg = errorMessage;
        }

        throw Error(errMsg);
    }
}