---
name: AnnaFeit
first_name: Anna
last_name: Feit
img: Feit_Anna.Maria5_-1536x1536.jpg
# "title" = page title so using prefix instead
prefix: Professor
position: Professor 
institution: Professor in Computer Science at Saarland University
talk: User-driven Mixed Reality Adaptation
links:
  - name: Web-page
    absolute_url: [https://cix.cs.uni-saarland.de/?page_id=679](https://cix.cs.uni-saarland.de/?page_id=679)
speaker_type: Courses
---
I am Professor in Computer Science at Saarland University, where I lead the Computational Interaction Group. My research explores how computational methods can help us better understand and optimize the way people interact with digital systems. By combining behavioral data, predictive modeling, and interface design, my work aims to make interactive systems more adaptive, efficient, and human-centered.

*Talk title:* User-driven Mixed Reality Adaptation, Anna Maria Feit, Sina Elahi Manesh, João Belo, Isidora Jeknić, Alexander
Koller

*Abstract:* 
Digital content in mixed reality must continuously adapt to the user's changing context, including the real-world environment, the user's current task, and evolving information and interaction needs. Correctly anticipating these needs is inherently difficult: they are highly personal and depend on many factors. Purely automatic approaches risk adaptation errors and user frustration, while manual customization, such as spatial rearrangement of content, tends to produce suboptimal outcomes in particular when it comes to aspects such as efficiency or ergonomics. These are difficult to assess for end-users who typically lack a structured understanding of both, the MR design space as well as usability criteria. Moreover, continuously adjusting interface parameters, such as spatial placement or visibility, is both cumbersome for users and disruptive to their primary task.
In this talk, I present first results from our ongoing work on user-driven adaptation of mixed-reality interfaces. Our goal is to enable users to intuitively steer interface adaptation without interrupting their ongoing activity or breaking immersion. To this end, we develop a natural-language interface through which users can express high-level adaptation instructions in an unconstrained way. The central challenge is that such instructions are naturally vague and potentially incomplete, making it difficult to translate them into actionable adaptation behavior. We address this by developing a structured intermediate representation that captures the semantics of user instructions in a form that can be systematically connected to a multi-objective constrained optimization problem. We use a large language model to parse user utterances into this representation and translate it into an adaptation policy using the adaptive user interfaces toolkit. The resulting optimization formulation can integrate subjective user preferences, with designer-defined objective criteria such as ergonomics or error probability. Our current approach ensures that adaptive behavior is initiated and controlled by the user, but alternative allocations of control between user and system are imaginable. Importantly, it supports users in iterative refinements (e.g., adding constraints when an interaction problem arises), as well as complete policy changes (e.g., when changing tasks) and enbales the system to ask clarification questions and give feedback. We evaluate our approach across multiple use cases in which participants perform representative real-world tasks while interacting with digital content, comparing our system against fully automatic and fully manual baselines on measures of user satisfaction, task immersion, and adaptation quality.
