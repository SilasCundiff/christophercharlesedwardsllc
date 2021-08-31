import React from 'react';

// import NewsImageSmall from '../../../assets/images/resized/1-mabrafirmmarch2020_6307@0.25x.png';
// import NewsImageMed from '../../../assets/images/resized/1-mabrafirmmarch2020_6307@0.5x.png';
// import NewsImageLarge from '../../../assets/images/resized/1-mabrafirmmarch2020_6307.png';
import LowResPhoto from '../../../assets/images/resized/CCE.jpeg';
import './FirstArticle.scss';
const FirstArticle = () => {
  return (
    <div className='FirstArticle' id='Articles'>
      <h2 className='source'>
        News article from <br /> the Citizen Newspaper
      </h2>
      <div className='permission'>reprinted with express permission</div>
      <hr />
      <figure>
        <h3>
          Chief Judge Edwards to resign within 2 years, will go back to being a
          ‘jury trial lawyer’
        </h3>
        <figcaption className='author'>
          By Cal Beverly - December 4, 2020
        </figcaption>
      </figure>
      <article>
        <section className='article-heading'>
          <figure>
            <img
              src={LowResPhoto}
              alt='a portrait of Christopher Charles Edwards'
              srcSet={`${LowResPhoto} 300w, ${LowResPhoto} 768w,${LowResPhoto} 1000w,`}
              className='portrait'
            />
            <figcaption className='portrait-caption'>
              Christopher Edwards, chief judge of the 4-county Griffin Judicial
              Circuit. Photo/Submitted.
            </figcaption>
          </figure>
          <h3 className='quote'>
            After 22 years as a superior court judge for Fayette County and the
            rest of the Griffin Judicial Circuit, Edwards says,{' '}
            <span className='highlight'>
              <br /> ‘I am most fully myself as a trial lawyer’ —
            </span>{' '}
          </h3>
        </section>
        <section className='article-body'>
          <p>
            Griffin Circuit Superior Court Chief Judge Christopher Charles
            Edwards has announced that he will resume practicing law as a jury
            trial lawyer after departing from his 22-year judgeship at a date
            not yet determined, before his term ends December 31, 2022. He made
            the following statement.
          </p>

          <p>
            “This is my step toward the privilege and honor of resuming my
            career as a jury trial lawyer. My twenty-two years as a Superior
            Court judge is two years past the maximum time of twenty years the
            law encourages a judge to serve. Since a full-time judge cannot also
            practice law, I must end my service as a judge to practice as a
            lawyer again. I expect to be talking with interested lawyers about
            my next role.
          </p>

          <p>
            “I am told that I have influenced a number of students to become
            lawyers. I hope describing how I feel about my career may encourage
            more students to become jury trial lawyers, advancing civilization
            through the rule of law.
          </p>

          <p>
            “The month after I turned twenty-six, licensed as a lawyer for only
            sixty-seven days, I selected my very first jury. I was the only
            prosecutor in the courtroom all week in trial against two defense
            lawyers. I was older and more confident four days later, a lawyer
            for seventy days, when that first jury found the defendant guilty of
            malice murder on Indictment 7868 in Spalding County Superior Court.
          </p>

          <p>
            “Since then, I have loved conducting jury trials, in almost every
            type of criminal and civil case, one after another, for seventeen
            years as a jury trial lawyer, then for twenty-two years as a
            Superior Court jury trial judge, totaling hundreds of jury verdicts.
            My professional life has been punctuated by the moments the verdict
            is read aloud. I am always eager for the next trial.
          </p>

          <p>
            “As a jury trial lawyer, I prosecuted murder and defended murder and
            other serious criminal cases, to jury verdict, as sole counsel. I
            served as sole counsel in many injury cases and divorces to jury
            verdict. I was frequently associated by other law firms to handle
            injury and wrongful death cases. I achieved many substantial
            published jury verdicts for my injured clients and their families. I
            wrote and argued many appeals as a prosecutor in criminal cases and
            defended my verdicts on appeal in many civil injury cases.
          </p>

          <p>
            “Anyone who knows me as a judge has heard me say I miss being a jury
            trial lawyer. I am most fully myself as a trial lawyer immersed in
            the focused intensity of a well prepared jury trial. There is no
            better feeling than winning a jury verdict for a worthy client. I
            revere the truth-telling courage of impartial jurors, fearlessly
            righting wrongs.
          </p>

          <p>
            “I depart on a high note, after achieving my goals both as a
            Superior Court judge since 1998 and as chief judge since 2010. I
            depart the bench leaving the Griffin Circuit second to none in
            Georgia. Since I became chief judge, thanks to our Superior Court
            bench, our circuit‘s improved judicial case assignment system has
            reduced the age of our caseload, reduced the size of trial
            calendars, and dramatically reduced county jail populations.
          </p>

          <p>
            “I wrote our circuit’s unique improved fast-track probation
            violation hearing process, also reducing county jail populations.
            Thanks to our excellent court clerks, whose support has been
            instrumental to our progress, the Griffin Circuit was the very first
            circuit in the state converting to civil e-filing in Superior Court.
          </p>

          <p>
            “In addition to judge and chief judge duties, I served our children
            and the bar, and I worked to improve Georgia law.
          </p>

          <p>
            “To serve our children, I fulfilled my 1998 campaign promise to
            deter youthful crime by encouraging education. I spoke in schools to
            over 58,000 children, encouraging reading, math, graduation and
            college, to increase earnings.
          </p>

          <p>
            “To teach our children constitutional principles, I created and
            taught a free annual constitutional law seminar on a series of eight
            Saturday mornings for high school students, and hosted thousands of
            students on three occasions to observe live oral arguments of
            lawyers before the Georgia Supreme Court and Court of Appeals in
            Fayetteville and Griffin.
          </p>

          <p>
            “To serve the bar and improve the law, I authored and published many
            legal articles, two of Georgia’s current pattern jury instructions,
            and a pending substantial amendment to a uniform rule.
          </p>

          <p>
            “I taught often at lawyer seminars, and created an annual Fayette
            Bar seminar still held at Amicalola Falls State Park. I suggested
            and started the Fayette Bar’s continuing free monthly class on
            divorce at the Fayette library, to help the public navigate our
            court. I suggested several new laws that protect and serve Georgians
            every day.
          </p>
          <p>
            “I intend to continue serving on the State Bar of Georgia’s Board of
            Governors and the Board of the General Practice and Trial Section.
          </p>

          <p>
            “I will never forget my sense of awe, after my first election, the
            first time I walked into a big conference room to be warmly greeted
            by all Georgia’s Superior Court judges. I will miss assembling twice
            each year with the finest, most selfless group of people I have ever
            known, the Superior Court judges of Georgia.
          </p>

          <p>
            “I am deeply grateful to the Griffin Circuit bench and bar, to the
            great people of Fayette, Spalding, Pike and Upson counties for
            electing me six times, and to my inspiring parents, brilliant
            daughters, and superb staff. Above all I am grateful to God for the
            privilege and honor of serving my generation.
          </p>

          <p>
            “If any excellent student is an exceptional reader, writer and
            speaker, and cannot resist speaking up for what is true and right, I
            am delighted to talk anytime about the steps to becoming a jury
            trial lawyer,” Judge Edwards said.
          </p>

          <p>
            Judge Edwards received the “Outstanding Service Award” from the
            Fayette Bar Association, the “Justice Robert Benham Community
            Service Award” from the State Bar of Georgia, the Fayette County Bar
            Association “Tireless Efforts to Improve and Strengthen the Bar
            Association and Community Award”, the “Thomas R. Burnside, Jr.
            Excellence in Bar Leadership Award” from the State Bar of Georgia,
            and the Supreme Court of Georgia’s “Certificate of Appreciation for
            Outstanding Service to the Court”.
          </p>

          <p>
            His legal articles have been published in “The Verdict”, published
            by the Georgia Trial Lawyers Association, “The Family Law Journal”
            and “Calendar Call”, both published by the State Bar of Georgia,
            “The Georgia Courts Journal” published by the Georgia Administrative
            Office of the Courts, and “The Champion”, nationally published by
            the National Association of Criminal Defense Lawyers. Judge Edwards
            served on five committees of the Council of Superior Court Judges:
            Pattern Jury Charge, Benchbook, Uniform Rules, Bench and Bar, and
            Access to Justice and Fairness in the Courts.
          </p>

          <p>
            The Griffin Circuit includes four counties: Fayette, Spalding, Pike
            and Upson. Judge Edwards was elected in a five-candidate race in
            1998, and was re-elected without opposition in 2002, 2006, 2010,
            2014 and 2018.
          </p>

          <p>
            Governor Brian Kemp will be authorized by law to appoint a
            replacement judge to serve for the remaining period of Judge
            Edwards’ four-year term. The time for appointment of a replacement
            judge is at the governor’s discretion. Until a replacement judge is
            appointed, the state will use the salary that would have been paid
            to Judge Edwards, to instead pay retired senior judges to handle
            Judge Edwards’ cases.
          </p>
        </section>
      </article>
    </div>
  );
};

export default FirstArticle;
