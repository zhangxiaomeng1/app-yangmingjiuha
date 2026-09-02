import { SiteChrome, Eyebrow } from "../components/site-chrome";
import { courses } from "../lib/content";

export default function CoursesPage() {
  return (
    <SiteChrome>
      <section className="page-intro section-frame">
        <Eyebrow number="01">COURSE LAB · FROM REAL WORK</Eyebrow>
        <h1>课程不是幻觉，<br /><em>它从真实项目里长出来。</em></h1>
        <p>这里公开我准备讲什么、给谁讲、如何验证。当前是课程方向和实践档案，不把“筹备中”包装成已经售卖的成品。</p>
      </section>
      <section className="path section-frame" aria-label="学习路径">
        {['说清问题','让智能体执行','用项目验证','公开复盘'].map((step, index) => <div className="path-step" key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}
      </section>
      <section className="catalog section-frame">
        <div className="section-heading"><Eyebrow number="02">COURSE CATALOG</Eyebrow><h2>四条线，<br /><em>先从实践开始。</em></h2></div>
        <div className="course-list">
          {courses.map((course) => (
            <a className={`course-card course-detail-card ${course.accent}`} href={`/courses/${course.slug}`} key={course.slug}>
              <div className="course-top"><span>{course.number}</span><span className="course-status">{course.stage}</span></div>
              <div className="course-copy"><h3>{course.title}</h3><span>{course.shortTitle}</span><p>{course.promise}</p></div>
              <span className="course-foot">查看课程档案 →</span>
            </a>
          ))}
        </div>
      </section>
      <section className="note-band section-frame"><strong>一个边界：</strong>AI 可以降低开始的门槛，但不会替你完成工程判断、签名审核、用户验证和长期交付。</section>
    </SiteChrome>
  );
}
