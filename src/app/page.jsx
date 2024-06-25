import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-900 text-white flex justify-center items-center h-screen m-0">
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-yellow-400 text-xl mb-4">הרחבת המחנה, הקמת בית הליברלי הגדול, החלפת הממשלה.</h1>
        <p className="mb-2">הבחירות לוועידה יתקיימו מחר ה- 26.6.24, באופן דיגיטלי ומהבית.</p>
        <p className="mb-2">כל חברי המפלגה בעלי זכות הצבעה במחוז שלהם</p>
        <p className="mb-2">ברשימה מטה מופיעים פרטי כל המומלצים של המחוז שלנו.</p>
        <p className="mb-2">מומלץ להשתמש במחשב לתהליך הבחירה (לעומת נייד שמסורבל יותר).</p>
        <p className="text-left mb-4">
          הצבעת המתפקד כך:
          <br />1. תשלח לכם הודעה SMS עם לינק להצבעה דיגיטלית.
          <br />2. פתחו את (טאב) הקישור על המחשב, והעתיקו את מספרי המועמדים או השמות למערכת ההצבעה.
          <br />3. לאחר שתבחרו את מינימום האנשים במחוז שלכם, יופיע כפתור אישור הצבעה.
        </p>
        <h2 className="text-xl mb-4">המועמדים המומלצים ע"י מחוז דרום הם:</h2>
        <div className="form-group mb-4 text-left">
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            1085 - אביגיל גרין
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            1103 - מעין מנור
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            2256 - נטע מסיקה
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" />
            2119 - עידן דרור
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" checked />
            1211 - עינת דרופין
          </label>
        </div>
        <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">Submit</button>
      </div>
    </div>
  );
}
