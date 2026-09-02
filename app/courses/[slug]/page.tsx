/* eslint-disable @next/next/no-html-link-for-pages */
import { notFound } from "next/navigation";
import { SiteChrome, Eyebrow } from "../../components/site-chrome";
import { courses } from "../../lib/content";

export function generateStaticParams() { return courses.map((course) => ({ slug: course.slug })); }

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();
  return (
    <SiteChrome>
      <section className="page-intro section-frame course-hero">
        <Eyebrow number={course.number}>{course.stage.toUpperCase()} · COURSE FILE</Eyebrow>
        <h1>{course.title}<br /><em>{course.shortTitle}</em></h1>
        <p className="course-audience">适合：{course.audience}</p>
        <p>{course.promise}</p>
        <a className="button button-primary" href="/courses">返回课程总览 <span aria-hidden="true">↗</span></a>
      </section>
      <section className="detail-grid section-frame">
        <div><Eyebrow number="A">MODULES</Eyebrow><h2>会一起走过的<br /><em>几个动作。</em></h2></div>
        <ol className="module-list">{course.modules.map((module, index) => <li key={module}><span>0{index + 1}</span><strong>{module}</strong></li>)}</ol>
      </section>
      <section className="detail-columns section-frame">
        <div className="plain-card"><Eyebrow number="B">DELIVERABLES</Eyebrow><h3>不是听完就算</h3><ul>{course.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="plain-card"><Eyebrow number="C">TOOLS IN CONTEXT</Eyebrow><h3>工具只在需要时出现</h3><div className="tool-tags">{course.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><p>形式：口播、屏幕实操、课后清单。每一节都应该对应一个真实问题，而不是堆概念。</p></div>
      </section>
      <section className="note-band section-frame">课程状态：{course.stage}。公开的是方向与过程，具体开课时间和价格将在验证需求后决定。</section>
    </SiteChrome>
  );
}
