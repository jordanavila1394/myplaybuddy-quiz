import { Survey } from 'src/app/models/Survey';
import { Question } from './Question';
import { User } from './User';
export class LoginRequest {
  public email: string;
  public password: string;

  constructor (email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class RegisterRequest {
  public name: string;
  public surname: string;
  public email: string;
  public password: string;

  constructor (name: string,surname: string,email: string, password: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }
}

export class CreateUserRequest {
  public users: User[];

  constructor (surveyName: string, users: User []) {
      this.users =  users;
  }
}

export class CreateSurveyRequest {
  public userIds: [];
  public surveyName: string;
  public customerName: string;
  public surveyCustomName: string;
  public surveyDescription: string;
  public surveyFileBase64Cover: string;
  public questions: Question[];
  constructor (userIds: [], surveyName: string,customerName:string, surveyCustomName :string, surveyDescription  :string,surveyFileBase64Cover: string, questions: Question[]) {
      this.userIds =  userIds;
      this.surveyName = surveyName;
      this.questions = questions;
      this.customerName = customerName,
      this.surveyCustomName = surveyCustomName,
      this.surveyDescription = surveyDescription,
      this.surveyFileBase64Cover = surveyFileBase64Cover
  }
}
export class FilteredQuestionRequest
{
  public survey_id: number;
  constructor ( survey_id: number) {
    this.survey_id = survey_id;
  }
}

export class QuestionsOverviewChartsRequest
{
  public survey_id: number;
  public periods: any[];
  public filterQuestions: any[] | null;
  public filterCrossQuestion: any | null;
  constructor (survey_id: number, periods: any[], filterQuestions :any[] , filterCrossQuestion : any []) {
    this.survey_id = survey_id;
    this.periods = periods;
    this.filterQuestions = filterQuestions;
    this.filterCrossQuestion = filterCrossQuestion;
  }
}

export class QuestionsOverviewCrossTabChartsRequest
{
  public survey_id: number;
  public periods: any[];
  public filterQuestions: any[] | null;
  public crossQuestion: any | null;
  public currentQuestion : any | null;
  constructor (survey_id: number, periods: any[], filterQuestions :any[] , crossQuestion : any, currentQuestion: any) {
    this.survey_id = survey_id;
    this.periods = periods;
    this.filterQuestions = filterQuestions;
    this.crossQuestion = crossQuestion;
    this.currentQuestion = currentQuestion;
  }
}


export class UploadFileRequest
{
  public file: string;
  constructor ( file: string) {
    this.file = file;
  }
}

export class GetSurveyListRequest {
  public user_id: number;
  constructor ( user_id: number) {
    this.user_id = user_id;
  }
}
export class GetSurveyRequest {
  public survey_id: number;
  constructor ( survey_id: number) {
    this.survey_id = survey_id;
  }
}

export class LandingChartsRequest {
  public survey_id: number;
  public periods: any[];

  constructor ( survey_id: number, periods: any[]) {
    this.survey_id = survey_id;
    this.periods = periods;
  }
}

export class SatisfactionChartsRequest
{
  public survey_id: number;
  public periods: any[];
  public filterQuestions: any[] | null;
  constructor (survey_id: number, periods: any[], filterQuestions :any[]) {
    this.survey_id = survey_id;
    this.periods = periods;
    this.filterQuestions = filterQuestions;
  }
}

export class NPSChartsRequest
{
  public survey_id: number;
  public periods: any[];
  public filterQuestions: any[] | null;
  public filterCrossQuestion: any | null;
  constructor (survey_id: number, periods: any[], filterQuestions :any[] , filterCrossQuestion : any []) {
    this.survey_id = survey_id;
    this.periods = periods;
    this.filterQuestions = filterQuestions;
    this.filterCrossQuestion = filterCrossQuestion;
  }
}


export class PolarizationRequest
{
  public survey_id: number;
  public survey_name: string;
  public period: any;
  public filterQuestions: any[] | null;
  public filterCrossQuestion: any | null;
  public offset: number;
  public limit: number;
  constructor (survey_id: number, survey_name: string, period: any, filterQuestions :any[] , filterCrossQuestion : any [], offset: number, limit: number) {
    this.survey_id = survey_id;
    this.survey_name = survey_name;
    this.period = period;
    this.filterQuestions = filterQuestions;
    this.filterCrossQuestion = filterCrossQuestion;
    this.offset = offset;
    this.limit = limit;
  }
}

export class AggregationRequest
{
  public survey_id: number;
  public survey_name: string;
  public periods: any;
  public filterQuestions: any[] | null;
  constructor (survey_id: number, survey_name: string, periods: any, filterQuestions :any[]) {
    this.survey_id = survey_id;
    this.survey_name = survey_name;
    this.periods = periods;
    this.filterQuestions = filterQuestions;
  }
}



export class OpenTextBoxesRequest
{
  public survey_id: number;
  public survey_name: string;
  public period: any;
  public filterQuestions: any[] | null;
  public filterTouchpoint : any;
  public filterNps : any;
  public offset: number;
  public limit: number;
  constructor (survey_id: number, survey_name: string, period: any, filterQuestions :any[] , filterTouchpoint: any, filterNps: any, offset: number, limit: number) {
    this.survey_id = survey_id;
    this.survey_name = survey_name;
    this.period = period;
    this.filterQuestions = filterQuestions;
    this.filterTouchpoint = filterTouchpoint;
    this.filterNps = filterNps;
    this.offset = offset;
    this.limit = limit;
  }
}




