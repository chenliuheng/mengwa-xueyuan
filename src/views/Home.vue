<template>
  <div class="home">
    <div class="header">
      <h1>🎓 萌娃学院</h1>
      <p>让学习变得有趣！</p>
    </div>
    
    <div class="avatar-section" @click="$router.push('/profile')">
      <div class="avatar">{{ user.avatar }}</div>
      <div class="user-info">
        <span class="name">{{ user.name }}</span>
        <span class="level">Lv.{{ user.level }} {{ user.badge }}</span>
      </div>
    </div>
    
    <div class="stats">
      <div class="stat">
        <span class="num">{{ user.exp }}</span>
        <span class="label">经验值</span>
      </div>
      <div class="stat">
        <span class="num">{{ user.stars }}</span>
        <span class="label">⭐</span>
      </div>
      <div class="stat">
        <span class="num">{{ user.badges.length }}</span>
        <span class="label">徽章</span>
      </div>
    </div>
    
    <div class="modules">
      <div class="module english" @click="$router.push('/english')">
        <div class="icon">🇬🇧</div>
        <div class="title">英语启蒙</div>
        <div class="desc">趣味单词、听力训练</div>
      </div>
      
      <div class="module math" @click="$router.push('/math')">
        <div class="icon">🔢</div>
        <div class="title">数学思维</div>
        <div class="desc">数字认知、加减法</div>
      </div>
    </div>
    
    <div class="daily-reward" @click="getDailyReward">
      <span>🎁 今日奖励</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  name: '小朋友',
  avatar: '🐻',
  level: 1,
  badge: '🌟',
  exp: 100,
  stars: 5,
  badges: ['🌟']
})

const getDailyReward = () => {
  alert('🎉 获得10经验值！')
  user.value.exp += 10
}
</script>

<style scoped>
.home {
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
}

.header {
  text-align: center;
  padding: 30px 0;
}

.header h1 {
  font-size: 32px;
  color: #FF6B6B;
  margin-bottom: 8px;
}

.header p {
  color: #888;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.avatar {
  width: 60px;
  height: 60px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFF3E0;
  border-radius: 50%;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.level {
  font-size: 14px;
  color: #FF9800;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.stat {
  text-align: center;
  background: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.stat .num {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
}

.stat .label {
  font-size: 12px;
  color: #888;
}

.modules {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.module {
  background: white;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.module:active {
  transform: scale(0.98);
}

.module.english {
  background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
}

.module.math {
  background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
}

.module .icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.module .title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
}

.module .desc {
  font-size: 14px;
  color: #666;
}

.daily-reward {
  margin-top: 30px;
  text-align: center;
  padding: 16px;
  background: linear-gradient(90deg, #FF9800, #FF5722);
  color: white;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>
