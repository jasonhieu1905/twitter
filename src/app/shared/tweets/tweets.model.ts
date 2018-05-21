export interface TweetModel {
    text: String;
    likes: Number;
    replies: Number;
    retweets: Number;
    hashtags: Array<string>;
    date: Date;
}
